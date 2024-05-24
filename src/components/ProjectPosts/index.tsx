import PostContainer from "./PostContainer.";
import PostContent from "./PostContent";

export default function ProjectPosts() {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 max-w-[600px] gap-8 mx-auto lg:max-w-[1200px] pt-20">
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
