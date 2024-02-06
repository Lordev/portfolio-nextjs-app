import { ComponentPropsWithoutRef } from "react";

type VideoProps = {
    videoSrc: string;
    videoType: string;
} & ComponentPropsWithoutRef<"video">;

export default function BgVideo({ videoSrc, videoType, ...props }: VideoProps) {
    return (
        <video autoPlay muted loop src={videoSrc} typeof={videoType} {...props}></video>
    );
}
