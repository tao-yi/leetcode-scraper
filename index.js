require("dotenv").config();
import fs from "fs";
import path from "path";
import { client } from "./client.js";
import { problemSetQuestionList } from "./query.js";
import { template } from "./template.js";

const dest = process.env.DEST;

async function main() {
  let skip = 0;
  let hasMore = false;
  do {
    const variables = {
      categorySlug: "",
      skip,
      limit: 50,
      filters: {},
    };
    let data = await client.request(problemSetQuestionList, variables);
    let questions = data.problemsetQuestionList.questions;
    hasMore = data.problemsetQuestionList.hasMore;
    await questions.map((question) => {
      const fileName = question.title;
      const id = question.frontendQuestionId;
      const templateData = {
        id,
        titleCn: question.titleCn,
        difficulty: question.difficulty,
        status: question.status,
        tags: question.topicTags?.map((t) => t.slug),
        companies: question.extra?.topCompanyTags?.map((c) => c.slug),
        freq: Math.floor(question.freqBar),
      };
      console.log("writing to file", fileName);
      fs.writeFile(
        path.resolve(dest, `./${id}.${fileName}.md`),
        template(templateData),
        () => {
          console.log("writing to file succseefully ", fileName);
        },
      );
    });
    skip += 50;
  } while (hasMore);
}

main();
