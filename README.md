# 모두의 캠퍼스 비지니스 포트폴리오 페이지

# 요건사항

1. 회사 소개(비전 소개)
2. 서비스 소개(모두의캠퍼스/북딜/네모공방 : 서비스로 이동)
3. 제휴 및 광고 (광고 내용 이미지 / PDF링크)
4. 팀 소개 (사진 / 글)
5. 회사게시판(공지사항/기술블로그/언론보도 : 카테고리)
   5-1. 글 노출 (페이지네이션 / 최신순 / 제목 / 날짜 / 사진)
   5-2. 글 작성 (관리자 로그인 / 수정,삭제 / 이름 / 내용 / 사진 / 업로드) : 최소기능
6. 문의글 작성(제목/이름/연락처/내용) : 회사메일로 작성 내용 발송
7. 위치(주소 / 구글지도)
8. SNS(페이스북, 유투브, 네이버블로그)

# 디렉토리 구조 설명


#### assets
- vendor: 공통라이브러리를 넣는다
- common: 페이지 뷰 상관없이 커스텀으로 제작한 소스코드를 관리한다.
- views: 각 페이지별로 다르게 짜야할 소스코드를 정의한다

#### src/router
... 평범... api나 json반환이 필요하다면 그 떄 가서 정의하겠음

#### src/views
- index.ejs는 index.html에 대한 HTML페이지라고 생각하는게 좋다.
- 이것도 역시 assets과 같은 구조로 정의될것이지만 차이점으로는 vendor같은 공통라이브러리(서버쪽이니까 모듈)를 두지 않는다.
- 그냥 HTML에 대한 내용만 적어도 좋다.
- common에는 ejs로 include해서 쓸것들을 정의하면 편리할것 같다.

# 실행 

``` bash
$ yarn install
$ yarn start
```

# 사용라이브러리

#### 클라이언트

- bootstrap.css
- jquery 3.x

#### 서버

- express