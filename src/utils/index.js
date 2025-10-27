import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames) => classNames.filter(Boolean).join(' ');

//this function will return an array of the latest date to the oldest one using the date-fins
export const sortBlogs = (blogs) => {
    return blogs
        .slice()
        .sort((a, b) =>
        compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
        );
}