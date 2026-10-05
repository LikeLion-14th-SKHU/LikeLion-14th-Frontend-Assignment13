# 프로필 카드 (Figma → React + Tailwind)

피그마 종합실습 때 만든 프로필 카드 CodeTea 플러그인으로 뽑아서 조금 고쳐봤어요

## Figma → Tailwind

- 카드 Vertical Auto Layout → flex flex-col
  - flex로 자식들을 한 줄로 나열하고 flex-col로 방향을 세로로 바꿔서 프로필, 자기소개, 태그, 버튼이 위에서 아래로 쌓여요
- 카드 W 700 / H Hug → w-[700px], 높이는 따로 안 줌
  - 너비는 700px로 고정하고 높이는 안 정해서 안에 내용 많아지면 카드가 알아서 길어져요
- 카드 Padding 50 / Gap 60 / Radius 30 → p-[50px] gap-[60px] rounded-[30px]
  - p는 카드 테두리랑 내용 사이 안쪽 여백, gap은 자식 요소들 사이 간격, rounded는 모서리 둥글게 해줘요
- 카드 Alignment 왼쪽 위 → items-start
  - 세로 방향 flex에서 items는 가로 정렬을 담당해서 자식들이 왼쪽에 붙어요
- 프로필 Horizontal + 가운데 정렬, Gap 50 → flex items-center gap-[50px]
  - flex 기본 방향이 가로라 사진이랑 이름이 옆으로 놓이고, items-center로 사진이랑 글자 높이 가운데를 맞춰요
- 프로필 사진 100x100 원 → w-[100px] h-[100px] rounded-full shrink-0
  - rounded-full로 동그랗게 만들고 shrink-0은 이름이 길어져도 사진이 찌그러지지 않게 해줘요
- 이름이랑 직무 Vertical, Gap 20 → flex flex-col gap-5
  - 이름 밑에 직무가 오도록 세로로 쌓고 gap-5(20px)로 둘 사이 간격 줬어요
- 태그 Wrap, Gap 30 → flex flex-wrap gap-[30px]
  - flex만 있으면 태그가 한 줄에 다 끼어서 줄어드는데 flex-wrap 넣으면 자리 없을 때 다음 줄로 넘어가요. gap은 가로 세로 둘 다 30px 적용돼요
- 태그, 버튼 Hug / Padding 40, 10 → shrink-0 px-10 py-[11px] (width 안 줌)
  - 너비를 안 주면 글자 길이 + 패딩만큼만 차지해서 Hug처럼 동작해요. 플러그인 코드에 flex-1 붙은 태그는 남는 공간 다 먹어서 늘어나길래 뺐어요
- 프로필, 자기소개, 태그, 버튼 영역 Fill Container → self-stretch
  - 부모가 세로 flex라서 self-stretch 주면 그 요소만 가로로 카드 너비만큼 쭉 늘어나요 (부모는 items-start라 안 주면 내용 길이만큼만 차지함)
- 버튼 오른쪽 정렬 → 감싸는 div에 flex flex-col items-end + self-stretch
  - 감싸는 div는 self-stretch로 카드 너비를 꽉 채우고, 그 안에서 items-end로 버튼만 오른쪽 끝에 붙여요. 버튼 자체는 Hug라 글자만큼 크기 유지해요
