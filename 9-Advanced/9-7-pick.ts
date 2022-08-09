{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };
  // 기존에 있는 타입에서 내가 원하는 것을 쏙 뽑아내서 사용하는 기능 pick
  // 기존에 가지고 있는 키들의 이름을 적어주어야한다.
  type VideoMetadata = Pick<Video, "id" | "title">;
  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: "title",
    };
  }
}
