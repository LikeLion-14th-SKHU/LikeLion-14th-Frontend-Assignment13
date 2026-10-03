# LikeLion-13TH-Assignment

## Figma -> Tailwind CSS 연결

### 1. 카드 전체 구조
Figma에서는 프로필, 자기소개, 기술 태그, GitHub 버튼 총 4개의 영역을 하나의 카드로 묶고 Vertical Auto Layout을 적용했음.

강의자료의 설정값은 다음과 같았다.
- Vertical Auto Layout
- Width: 700
- Height: Hug
- Gap: 60
- Padding: 50, 50
- Radius: 30

해서 `React`에선 아래와 같이 구현했음
```jsx
<div
  className="flex w-[700px] flex-col gap-[60px] rounded-[30px] bg-white p-[50px]">
```

### 2. 프로필 영역
프로필 사진과 이름 + Frontend Developer 영역에는 Horizontal Auto Layout이 적용되어 있음

강의자료의 설정값은 다음과 같았다.
- Horizontal Auto Layout
- Gap: 50
- W: Hug
- H: Hug
- Alignment: Center

아래와 같이 구현
```jsx
<div className="flex w-full items-center gap-[50px]">
  <div className="h-[100px] w-[100px] shrink-0 rounded-full bg-[#ff7137]" />

  <div className="flex flex-col gap-5">
    <h1 className="text-5xl">
      이우빈
    </h1>

    <p className="text-[32px]">
      Frontend Developer
    </p>
  </div>
</div>
```

### 3. 이름 + 직무 영역
Figma에서는 이름과 Frontend Developer를 선택한 뒤 Vertical Auto Layout을 적용함
설정값은:
- Vertical Auto Layout
- Gap: 20
- W: Hug
- H: Hug
- 이름 글자 크기: 48
- 직무 글자 크기: 32

```jsx
<div className="flex flex-col gap-5">
  <h1 className="text-5xl">
    이우빈
  </h1>

  <p className="text-[32px]">
    Frontend Developer
  </p>
</div>
```

### 4. 자기소개 영역
```jsx
<div className="w-full">
  <p className="text-4xl leading-tight">
    안녕하세요. 이우빈입니다.
    <br />
    잘 부탁드립니다.
  </p>
</div>
```

- `w-full`을 사용해 가로 공간 모두 차지하도록 함
- `<div className="w-full">`로 높이가 자연스럽게 결정되도록

### 5. 기술 태그
```jsx
function SkillTag({ children }) {
  return (
    <div className="w-fit rounded-[20px] bg-sky-500 px-10 py-2.5 text-[32px] text-white">
      {children}
    </div>
  )
}
```

- `Tailwind spacing` 단위는 기본적으로 4px 기준이므로 `px-10` 사용
- 마찬가지로 `px-10 py-2.5`로 가로 40px, 세로 10px이 되도록
- `rounded-[20px]`로 radius 20
- `w-fit`으로 `Hug Content` 만족

### 6. Fill Container
- `w-full`로 구현함

### 7. GitHub 버튼
- Padding: 40, 10
- W: Hug
- H: Hug
- Radius: 20
- 글자 크기: 32

```jsx
<button
  className="w-fit rounded-[20px] bg-emerald-500 px-10 py-2.5 text-[32px]">
  GitHub
</button>
```
