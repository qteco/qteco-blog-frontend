import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ content }) {
    return (
        <div className='max-w-prose mx-auto'>
            <div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}