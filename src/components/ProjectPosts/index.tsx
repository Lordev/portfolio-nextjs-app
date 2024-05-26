import PostContainer from "./PostContainer.";
import PostContent from "./PostContent";

export default function ProjectPosts() {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 max-lg:max-w-[600px] gap-16 mx-auto pt-20 px-2">
            <PostContainer fadeInDirection="left">
                <PostContent />
            </PostContainer>
            <PostContainer>
                <PostContent />
            </PostContainer>
            <PostContainer fadeInDirection="left">
                <PostContent />
            </PostContainer>
            <PostContainer>
                <PostContent />
            </PostContainer>
            <PostContainer fadeInDirection="left">
                <PostContent />
            </PostContainer>
            <PostContainer>
                <PostContent />
            </PostContainer>
        </div>
    );
}
