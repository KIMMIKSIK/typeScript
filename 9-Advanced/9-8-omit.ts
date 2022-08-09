{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };
  // omit은 해당 키를 제외한 나머지를 출력하며 기존 객체에 존재하지 않는 값도 쓸수 있다.
  type VideoMetadata = Omit<Video, "url" | "data">;
  function getVideo1(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }
  function getVideoMetadata1(id: string): VideoMetadata {
    return {
      id,
      title: "title",
    };
  }
}
