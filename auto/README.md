# 프로필 카드 — Figma ->React + Tailwind CSS

### 카드

| Figma/Tailwind 설명 |
| Auto Layout: Vertical | `flex flex-col` | 프로필 ->소개 ->태그 ->버튼을 위에서 아래로 쌓음 |
| Gap 60 | `gap-[60px]` | 각 영역 사이 간격 60px |
| Padding 50 | `p-[50px]` | 카드 안쪽 여백 50px |
| Width 716 (Fixed) | `w-full max-w-[716px]` | 기본 716px, 화면이 좁으면 줄어들도록 구현 |
| Corner radius 30 | `rounded-[30px]` | 카드 모서리 둥글게 |
| Alignment: Top left | `items-start` | 자식 요소를 왼쪽 기준으로 정렬 |

### 프로필 영역

| Figma/Tailwind 설명 |
| Auto Layout: Horizontal | `flex` | 도형과 텍스트를 가로로 배치 |
| Gap 50 | `gap-[50px]` | 도형과 텍스트 사이 50px |
| Alignment: Center | `items-center justify-center` | 도형과 텍스트를 세로 가운데 정렬 |
| Width: Fill Container | `w-full` | 카드 내부 너비를 가득 채움 |
| 이름/직무: Vertical | `flex flex-col` | 이름 아래에 직무를 배치 |
| 이름/직무: Gap 20 | `gap-5` | 이름과 직무 사이 20px |
| 이름/직무: Fill Container | `flex-1 min-w-0` | 도형을 제외한 남은 가로 공간을 모두 차지 |

### 소개

| Figma/Tailwind 설명 |
| Padding 10 | `p-2.5` | 소개 문구 주변 10px 여백 |
| Width: Fill Container | `w-full` / 텍스트 `flex-1` | 카드 너비만큼 늘어나고 길면 줄바꿈 |

### 기술 태그

| Figma/Tailwind 설명 |
| Auto Layout: Wrap | `flex flex-wrap` | 기술 태그가 공간이 부족하면 다음 줄로 이동 |
| Gap 30 (가로·세로) | `gap-[30px]` | 태그 사이, 줄 사이 모두 30px |
| Width: Fill Container | `w-full` | 카드 너비 안에서 줄바꿈 기준|
| Alignment: Left / Center | `items-center content-center` | 한 줄 안에서 세로 가운데 정렬 |

### 태그 · 버튼

| Figma/Tailwind 설명 |
| Width/Height: Hug Contents | `inline-flex shrink-0 whitespace-nowrap` | 글자 길이만큼만 크기를 차지|
| Padding 40 / 10 | `px-10 py-2.5` | 좌우 40px, 상하 10px |
| Corner radius 20 | `rounded-[20px]` | 둥근 모서리 |
| Alignment: Center | `items-center justify-center` | 글자를 가운데 정렬 |

### 버튼 영역

| Figma/Tailwind 설명 |
| Auto Layout: Vertical | `flex flex-col` | 버튼을 담는 세로 컨테이너 |
| Alignment: Right | `items-end` | GitHub 버튼을 오른쪽 끝으로 정렬 |
| Width: Fill Container | `w-full` | 카드 너비를 채워야 오른쪽 정렬 |