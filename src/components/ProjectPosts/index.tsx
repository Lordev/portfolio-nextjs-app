import PostContainer from "./PostContainer.";
import PostContent from "./PostContent";

export default function ProjectPosts() {
    return (
        <div className="grid grid-cols-2 gap-8 mx-auto max-w-[1200px] pt-20">
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
