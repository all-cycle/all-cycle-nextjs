import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const quizDirectory = join(process.cwd(), "_quiz");
// Users/soyoon/Documents/programming/2th/all-cycle/_quiz/plastic3.md

export function getQuizSlugs() {
  return fs.readdirSync(quizDirectory);
}

export function getQuizBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(quizDirectory, `${realSlug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  console.log(fileContents);

  const { data, content } = matter(fileContents);
  const items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "question") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllQuizList(fields = []) {
  const slugs = getQuizSlugs();

  const quizList = slugs
    .map((slug) => getQuizBySlug(slug, fields));
  return quizList;
}
