# Resume Modal Implementation TODO

## Steps to Complete:

### 1. [ ] Install dependencies
`npm install jspdf html2canvas`

### 2. [x] Create `src/resume.js`
- React component with formatted resume JSX from docx content.

### 3. [x] Update `src/components/Home.js`
- Add `useState` for modal visibility.
- Change Resume button to onClick.
- Add Modal JSX with Resume component.
- Add PDF download function using jsPDF/html2canvas.

### 4. [x] Test
- Run `npm start`
- Click Resume button → Modal opens with resume.
- Download → Saves resume.pdf
- Close modal.

