import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
    return (
        <section>
            <h2 className='mb-8 text-6xl font-bold tracking-tighter leading-tight'>Meer berichten</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-y-32 mb-32'>
                {posts.map((post) => (
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        author={post.author}
                        slug={post.slug}
                        excerpt={post.excerpt}
                    />
                ))}
            </div>
        </section>
    );
}
