export const template = ({
  id,
  titleCn,
  difficulty,
  status,
  tags,
  companies,
  freq,
}) => `---
id: ${id}
title: ${titleCn}
---

[link]()
难度:: #${difficulty}
标签:: ${tags ? tags.map((tag) => `#${tag}`).join(" ") : "N/A"}
公司:: ${companies ? companies.map((c) => `#${c}`).join(" ") : "N/A"}
出现频率:: ${freq}
status:: ${status}


\`\`\`ts
    
\`\`\`
`;
