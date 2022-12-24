# Javascript For Beginners

자바스크립트 초심자들을 위한 문제 저장소입니다.

## 사용법

### 시작하기

1. 해당 레포지토리를 fork한다.
  - 우측 상단의 `fork` 버튼을 누르시면 됩니다.
  
2. fork한 레포지토리를 clone한 후 package들을 설치합니다.
  - `code` 버튼을 누르면 해당 레포지토리의 git 주소를 복사할 수 있습니다.
  - e.g.,

    ```shell
    git clone https://github.com/lazy-sky/js-for-beginners.git
    cd js-for-beginners
    npm i
    ```

### 문제 풀이

1. 자신의 닉네임으로 폴더를 만든다. (e.g., `lazy-sky`)
2. 풀고 싶은 문제를 자신의 폴더로 복사해서 가져온다.
3. 문제를 푼다. 
  - `문제이름.js` 파일에서 `solution` 함수를 작성한다.
  - e.g., `is_evens.js`
4. 테스트를 실행해서 정답 여부를 확인한다.
  - 터미널에 `jest 문제이름` 실행 
  - e.g., `jest is_evens.test.js`
  - 만약 `jest` 명령어를 인식하지 못한다면 터미널에 `npm install -g jest`를 실행 후 다시 시도해보세요.
5. commit & push

### 풀이 공유하기

1. fork한 자신의 원격 레포지토리로 들어와 `Pull requests` 탭을 클릭한다. 
2. 새로운 PR을 생성한다. 
  - `Create pull requests` 버튼을 클릭한다.
  - 제목 및 내용을 채운다.
  - `Create pull requests` 버튼을 클릭한다. 이제 [원본 레포지토리 Pull requests 탭](https://github.com/lazy-sky/js-for-beginners/pulls)에 들어오면 해당 PR이 생성된 것을 확인하실 수 있습니다. 
3. 이후 제가 PR 내용을 확인한 후 해당 PR을 merge하게 되면 여러분의 풀이 코드가 main 브랜치에도 추가됩니다. 
  - 다른 분들을 위해, 자랑하기 위해 좋은 풀이 많이 많이 공유해주세요! 
