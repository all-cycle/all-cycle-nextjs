# <span style="color:#25AD5F">All-Cycle</span>
재활용이 용이한 제품을 구매할 수 있도록, 재활용에 대한 정보를 공유하는 플랫폼입니다. 플라스틱 음료수 페트병 라벨 절취선이 들어가는 법이 적용되고 있는 흐름에 맞춰서 기업들이 책임감을 가지고 제품을 생산해내길 바라는 마음으로 기획하게 되었습니다.

<br />

`Deploy` [https://allcycle-deploy.vercel.app/](https://allcycle-deploy.vercel.app/)

`Github` [https://github.com/all-cycle/all-cycle-nextjs](https://github.com/all-cycle/all-cycle-nextjs)

`Presentation` [https://youtu.be/F8OHnevCS30?t=2078](https://youtu.be/F8OHnevCS30?t=2078)  

<br />


## <span style="color:#25AD5F">♳</span> _***프로젝트 기획***_

**음료수에 대한 정보**와 **웹 발행물에 대한 정보**를 보여주는 것이 주된 기능이였기 때문에 목업디자인을 하다보니 정적인 페이지가 많아졌고, 이에 대한 데이터베이스 형성을 어떤식으로 해야할지 고민하게 되었습니다.

정보전달이 중요하고, pure한 데이터가 필요한 정보전달 앱을 기획했기 때문에 관리자가 직접 입력하는 DB를 만드는 것이 맞지 않다고 생각하였기 때문에 크롤링을 생각하게 되었고, 크롤링을 해서 HTML로 렌더링하는 것에 대해 자료 조사를 하던 중 `SSG (Static Site Generator)` 에 대해서 알게 되었습니다.

`Next.js` 프레임워크를 선택하여 `SSG + React` 라는 점과 `CSR + SSR` 이 다양하게 섞인 앱을 만들고 싶었고, 최대한 정적/동적 페이지를 분리하여 `SSG 프레임워크만의 장점`을 살리고자 하였습니다.

<br/>

## <span style="color:#25AD5F">♴</span> _***프로젝트 기간***_

| **`[1주차]`** 21.05.03 ~ 21.05.09 | **`[2주차]`** 21.05.10 ~ 21.05.16 | **`[3주차]`** 21.05.17 ~ 21.05.22
| --- | --- | --- |
| - 브레인스토밍 및 아이디어 결정    | - 전체 프로젝트 구조 디자인        | - 전체적인 UI/UX design
| - Mock up 및 DB schema 디자인 | - NewsLetter Crawling        | - AWS 3w 연결
| - Next.js study             | - Product DB Crawling        | - Camera + Vision API
| - Dynamic Routes            | - MongoDB + Mongoose         | - Deploy with `vercel`
|                             | - `next/auth` + Google Login | - Quiz Implement

<br />

## <span style="color:#25AD5F">♵</span> _***기능구현***_

| 메인 | 제품검색 | 웹발행물 크롤링 | 마이페이지 & 퀴즈
| --- | --- | --- | --- |
| <img src="./public/_readme_assets/allcycleCamera.gif" width="250" /> | <img src="./public/_readme_assets/allcycleSearch.gif" width="250" /> | <img src="./public/_readme_assets/allcycleLetter.gif" width="250" /> | <img src="./public/_readme_assets/allcycleMyPage.gif" width="250" /> |

<br/>

## <span style="color:#25AD5F">♶</span> _***KEYWORDS***_
### **`1) next/auth`**

처음에는 MERN stack 프로젝트를 진행할 때처럼 firebase 나 passport 등을 이용하여 authentication을 구현해야겠다고 생각했었는데, Next.js는 자체 내에서 **클라이언트와 서버를 한번에 관리할 수 있는 프레임워크**이고, 외부의 Authentication을 이용할 필요가 없도록 `next/auth` 를 제공한다고 문서에 쓰여있었습니다.

실제로 `next/auth` 기능을 구현하여 로그인을 해보니 User테이블 말고도 세션과 토큰을 관리하는 테이블이 자동으로 만들어졌고, 덕분에 MongoDB에서 바로 유저정보를 확인할 수 있었습니다. 그리고 전체적인 프로젝트내에서  `useSession, getSession` 등의 메소드를 이용하여 바로 유저정보를 얻어서 사용할 수 있어서 굉장히 편리하였습니다. 유저정보를 세션과 함께 관리해야 한다면, 리덕스를 당연히 이용해야할 것이라 생각하고 있었는데 `next/auth` 기능을 경험해보면서 리덕스를 사용하지 않아도 된다는 결론을 내리게 되었습니다.

리덕스 관련 로직이 없기 때문에 그만큼 직관적으로 API에 요청을 보내기 때문에 가독성도 올라갔고, 프로젝트의 파일 수도 많이 늘어나지 않을 수 있었던 것 같습니다.

<br/>

### **`2) Crawling & Mixed Contents`**

서울환경연합에 크롤링에 대한 허락을 받은 후 본격적으로 크롤링을 시작하였습니다. 맨처음에는 **Server Side Rendering** 메소드(getServerSideProps)를 이용하여 크롤링을 했습니다. 해당 페이지에 접근할 때마다 크롤링을 하기 때문에 가장 최신의 데이터를 유지할 수 있긴 했지만, 속도가 매우 오래걸렸습니다. 크롤링을 한 HTML 문서중에 필요한 부분만 스크랩하여 필요한 DOM구조로의 변경까지 한 후 렌더링을 해야했기 때문입니다. SSG의 장점을 살려서 `Incremental Static Generation`을 하려면 어떤 형식으로 크롤링을 해야할지에 대해 많이 고민을 했던 것 같습니다.  

2 - 1.  
Next.js의 `getStaticProps` 메소드를 이용해서 **빌드 시에 크롤링한 HTML을 Direct로 생성**하는 방법에 도전하였습니다. 하지만 빌드할 때 크롤링을 하자 로컬환경에서는 문제가 없었지만, 배포 후에는 `Mixed Content` 이슈가 생겼습니다. **SSL인증서가 포함된 `https` 도메인에서 `http` 로 시작하는 이미지(크롤링대상)로의 접근**을 하려고 했기 때문입니다.  

2 - 2.  
이 문제를 해결하기 위해 이미지를 `base64`로 encoding하여 로컬에 저장하는 방법을 도전했었습니다. 하지만 이 뉴스레터를 보여주는 페이지(/webLetter)를 Next.js가 구현할 수 있는 Static Build의 빠른 속도를 경험해보고 싶어서 무한스크롤로 구현하고 싶었기 때문에, 각 이미지를 `base64`로 구현하면 결국 유저가 다운받는 페이지의 용량이 너무 커질 것 같다는 판단을 하였습니다.  

2 - 3.  
이미지를 `S3 bucket`에 저장했다가 다시 서비스하는 방법도 있었지만, 이미지에 대한 요청이 계속해서 발생하면 요금에 대한 비용이 발생할 것 같았습니다. Next.js를 쓰는 것의 장점 중 하나가 서버에 대한 접근을 줄여서 요금적 이득을 볼 수 있는 것이라 생각하기 때문에 로컬에 이미지를 저장하기로 하였습니다.  

2 - 4.  
`image-loader` 라는 라이브러리를 이용하여 이미지를 다운로드 하고, 페이지를 빌드하여 문제를 해결하게 되었습니다. 그리고 로컬에 (href, title, title)등을 `markdown` 파일로 저장하였습니다. 이렇게 함으로써 `getStaticProps` 메소드를 써볼 수 있었고, 어디까지 크롤링이 되었는지 제가 확인할 수 있었습니다.  

(만약 Next.js 사용하지 않고 MERNstack을 이용했다면) 크롤링을 하여 DB에 저장해두는 전처리코드가 필요했을 것이고, DB에 요청을 보내서 받고 리액트→브라우저에 거쳐 보여줘야했을 것입니다. 그리고 매번 서버에 `request`를 보내기 때문에 서버비용이 발생했을 것입니다. 하지만 NextJS를 이용하였기 때문에 50개가 넘는 element들을 가지고 있는 `/webLetter` 페이지가 1초도 안걸릴 정도로 빠르게 렌더링되었기 때문에 정말 신기했습니다.  

<br />

## <span style="color:#25AD5F">♷</span> _***회고***_

Static하게 HTML을 만드는 것이 과연 얼마나 빠른 속도를 가져올 것인가에 대한 궁금증을 가지고 시작했던 프로젝트였습니다. 처음에 한페이지만을 크롤링 했을 때에는 느끼지 못했지만, 더 많은 양의 데이터를 다뤄보니 Static하게 빌드 된 HTML의 속도가 얼마나 빠른지에 대해 체감할 수 있었습니다. 기업에서 홈페이지를 항상 업데이트된 버전으로 관리하는 것이 얼마나 힘든지 알고있는 만큼, 정말 효율적인 도구이고 방법론이구나 라는 생각을 하게 되었습니다. 더 많은 것에 도전해보지 못해 아쉬웠던 시간이였습니다. 다시 NextJS를 이용하여 서비스를 기획하게 된다면 serverless하게 프로젝트를 만들어보고 싶습니다.
