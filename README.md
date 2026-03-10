# Lucky Im — Portfolio

## 📁 폴더 구조

```
luckyim0519.github.io/
├── index.html              ← luckyim0519.github.io  (Hero + Gallery)
├── about/
│   └── index.html          ← luckyim0519.github.io/about
├── projects/
│   └── index.html          ← luckyim0519.github.io/projects
├── diary/
│   └── index.html          ← luckyim0519.github.io/diary
├── css/
│   └── style.css           ← 모든 페이지 공유 스타일
├── js/
│   └── main.js             ← 모든 페이지 공유 JS
└── images/
    └── gallery/            ← 갤러리 사진 여기에
        ├── 1.jpg
        └── ...
```

## 🖼️ 갤러리 사진 추가

`index.html` gallery 섹션에서:
```html
<!-- 이걸 -->
<div class="photo-placeholder">photo 1</div>
<!-- 이렇게 -->
<img src="images/gallery/1.jpg" alt="" />
```

## ✏️ 일기 추가

`diary/index.html` 에서 아래 블록 복사 후 위에 붙여넣기:
```html
<div class="diary-entry reveal">
  <div class="diary-date">March 10, 2025</div>
  <h3 class="diary-title">제목</h3>
  <p class="diary-text">내용...</p>
</div>
```

## 🚀 GitHub 업로드

이 폴더 전체를 `luckyim0519.github.io` 레포에 올리면 끝!
