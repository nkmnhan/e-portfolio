type ProjectType = "private" | "public";

export interface ProjectInfo {
  id: string;
  type?: ProjectType;
  title?: string;
  poster: string;
  description?: string;
  createddate?: string;
  updateddate?: string;
}

const RAW_URLS = [
  "https://cdn.hailuoai.video/open-hailuo-video-web/public_assets/8d56cb9a-595b-42c8-9e0f-d2897a6aa644.png?x-oss-process=image/resize,p_50/format,webp",
  "https://cdn.hailuoai.video/open-hailuo-video-web/public_assets/20251010-143258.jpeg?x-oss-process=image/resize,p_50/format,webp",
  "https://cdn.hailuoai.video/open-hailuo-video-web/public_assets/77aa7830-0980-459f-a056-6e0ad62d4bf2.png?x-oss-process=image/resize,p_50/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-10-28-11/video_cover/1761622033757406203-.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-11-24-18/video-agent-template/1763979870027690288-1763977792123622666-8ff63d1d.png?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-11-26-15/video-agent-template/1764141549740275032-11%E6%9C%8826%E6%97%A5.png?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-10-28-11/video_cover/1761621836236241873-.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-12-01-16/video_cover/1764578756280853139-449616351465353216-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-11-25-18/video_cover/1764064978964241431-449661880912097281-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-11-10-14/video_cover/1762757739851489514-444179597061033984-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-11-26-19/video-agent-template/1764156258173223892-11%E6%9C%8824%E6%97%A5(4).png?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-11-28-12/video-agent-template/1764305939345932637-%E6%80%AA%E5%A5%87%E7%89%A9%E8%AF%AD.mp4_20251128_125825.770.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-11-20-15/video_cover/1763624201255581565-447814310153728002-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-12-02-16/video_cover/1764664979546366104-450022861651619845-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-11-21-16/video-agent-template/1763714079884628859-1763711362284434381-192ebeb7.png?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-11-14-17/video_cover/1763112524659223299-444534357169577984-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-11-13-11/video_cover/1763005197978343293-444927112127488002-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-11-10-14/video_cover/1762756797048157381-444174279316901893-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-11-11-18/video_cover/1762856809672391689-444246356828921862-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-11-13-11/video_cover/1763005685882024707-444939250057388033-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-10-29-16/video_cover/1761726422369729265-439854506714087426-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-10-30-18/video-agent-template/1761820870750744538-%E6%88%AA%E5%B1%8F2025-10-30%2018.40.34.png?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-10-14-18/video_cover/1760436806768954163-434445823960141832-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-10-22-10/video-agent-template/1761099650687129908-%E5%B0%81%E9%9D%A2.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-10-25-17/video_cover/1761383947561931171-438419003515080708-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-09-01-12/video_cover/1756701876966158373-418751386927927305-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-10-15-17/video-agent-template/1760520126144177646-1760516224091906339-07ededb4.png?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-10-23-13/video_cover/1761199149156492242-437639260649820166-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-10-26-17/video_cover/1761469707260601221-438779451087261698-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-10-23-16/video-agent-template/1761206870905291283-IMG_6959.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-10-21-14/video-agent-template/1761029865691240758-1761029005168191048-1baa2c64.png?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-10-14-11/video_cover/1760411202975980856-434332877183504391-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-10-16-14/video-agent-template/1760595908666598660-1760591444424043019-4e332fdc.png?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-10-23-15/video_cover/1761203022175753613-437656817389801480-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-10-24-15/video_cover/1761289221672949276-438020806699388928-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-10-10-11/video-agent-template/1760067040961389762-1760065569068739028-b8174fef.png?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-10-15-12/video_cover/1760501802771815843-434717927909609479-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-09-24-13/video_cover/1758692448494150359-427129643746406407-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-09-24-19/video_cover/1758712480390165696-427214343554936839-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-09-16-17/video_cover/1758013942674000434-424280364262547460-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-09-17-11/video_cover/1758081533670575727-424302778136584200-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-09-22-16/video_cover/1758529353271165540-426445870025334793-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-09-23-19/video_cover/1758628144971230485-426859723884277767-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-09-24-15/video_cover/1758698540800254336-427155720476766211-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-09-16-16/video_cover/1758011142862618106-424261256817074184-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-09-15-17/video_cover/1757928980626655982-423927500319145993-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-09-15-18/video_cover/1757931610449950621-423939697317429250-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.com/prod/2025-06-24-15/video_cover/1750748624058928550-393804002331549696-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-06-19-01/user/multi_chat_file/57d414c7-51a5-4c56-bfb8-ceadda5edb3b.jpeg?x-oss-process=image/resize,p_50/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-06-24-02/video_cover/1750702442365109651-cover_e256141fb2e00ae7a08188e4460ab802.jpeg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-08-07-18/video_cover/1754562224839978344-409798697485455367-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-06-20-06/video_cover/1750371580108363733-cover_3426db75f521913e91829965a241c4c4.jpeg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-08-13-14/video_cover/1755065656347498427-411918647662620675-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-06-24-03/video_cover/1750705540616728838-cover_95fc7eff4742e512d9e32b544f98ca05.jpeg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-05-30-22/video_cover/1748616281938393585-cover_3f93881c434e5ed69725cec807adfd06.jpeg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-06-19-01/video_cover/1750266852870255144-cover_022d1eea04bd364e251d8ff10db01f22.jpeg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-06-20-01/video_cover/1750353038373894517-cover_6c6ed6687b5ca41a4898f5ea03491b7d.jpeg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-07-16-20/video_cover/1752669849613402414-cover_133926aaf399c9c7f737fd4430b395a0.jpeg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-08-12-15/video_cover/1754982049273981189-411567467862306824-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-06-23-14/video_cover/1750661141569877947-cover_4e1a3530d8051dad5a69db3ce82ff176.jpeg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.com/prod/2025-07-03-16/video_cover/1751530298359449698-397087679467597833-cover.jpg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-07-31-04/user/multi_chat_file/1753906361233238293-407053705794506754_1753906361.png?x-oss-process=image/resize,p_50/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-06-29-19/user/multi_chat_file/edf33d39-97d2-4be3-b8a2-1a0667f519b7.jpeg?x-oss-process=image/resize,p_50/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-06-20-00/video_cover/1750350135017507391-cover_39113120e2d18ceb2839842a24dbc6f0.jpeg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-06-21-06/video_cover/1750456825877205178-cover_69bcda00187520266253c37ac8c9466a.jpeg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-06-23-23/video_cover/1750693455281289873-cover_d3a370a5c345676a7f8e3e0b2031565c.jpeg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-06-24-01/video_cover/1750698197605996436-cover_3433334542ed358c586ac389649a24e2.jpeg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-06-19-01/video_cover/1750268517328980333-cover_8585f0f6e48924a07acb92dc687dda19.jpeg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-06-20-00/video_cover/1750349629052336825-cover_bbeeefd5177179638f67b6d0dec41e02.jpeg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-06-20-00/video_cover/1750350715137885960-cover_8b61ee694b2ebbe6aa59d76101f55928.jpeg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-06-22-12/video_cover/1750566344425405529-cover_d8aff02e4bfc1685182ddb689d9c4f6a.jpeg?x-oss-process=image/resize,w_540/format,webp",
  "https://cdn.hailuoai.video/moss/prod/2025-06-23-16/video_cover/1750665915851257846-cover_fe3d913c21518a8c8963c8ac9755fdcc.jpeg?x-oss-process=image/resize,w_540/format,webp",
];

const IMAGE_URLS: Array<ProjectInfo> = RAW_URLS.map((poster, i) => {
  const id = i.toString();
  const type = i % 2 === 0 ? "public" : "private";
  const title = `Project Title ${id}`;
  const description = `This is a sample description for project ${id}. It demonstrates the project's features and purpose.`;
  const createddate = `2025-11-${String((i % 28) + 1).padStart(2, '0')}`;
  const updateddate = `2025-12-${String((i % 5) + 1).padStart(2, '0')}`;
  return { id, poster, type, title, description, createddate, updateddate };
});
export default IMAGE_URLS;
