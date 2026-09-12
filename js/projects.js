/**
 * Wannaporn Ratchakit Portfolio
 * Projects Catalog Module - Data, Filtering & Modal Dialog
 */

const projectsData = [
  {
    id: "project-samsung-repair",
    title: "ระบบจัดการงานซ่อมและคืนโทรศัพท์ Samsung",
    category: "web",
    categoryName: "Web & Database",
    thumbnail: "assets/images/project1.svg",
    tags: [
      "PHP",
      "MySQL",
      "Bootstrap 5",
      "phpMyAdmin",
      "Database"
    ],
    shortDesc:
      "เว็บไซต์สำหรับจัดการข้อมูลโทรศัพท์ Samsung ที่นำเข้าซ่อม ติดตามสถานะงานซ่อม และบันทึกข้อมูลการรับคืนเครื่อง",
    fullDesc:
      "โครงงานพัฒนาระบบจัดการงานซ่อมและคืนโทรศัพท์ Samsung โดยออกแบบฐานข้อมูลและเว็บไซต์สำหรับจัดเก็บข้อมูลลูกค้า ข้อมูลโทรศัพท์ อาการเสีย รายละเอียดการซ่อม และสถานะการรับคืนเครื่อง เพื่อช่วยให้การจัดการข้อมูลเป็นระบบและค้นหาข้อมูลได้สะดวก",
    features: [
      "ออกแบบฐานข้อมูลด้วย E-R Diagram",
      "จัดเก็บข้อมูลลูกค้าและโทรศัพท์มือถือ",
      "บันทึกอาการเสียและรายละเอียดการซ่อม",
      "ติดตามสถานะงานซ่อมและการคืนเครื่อง",
      "พัฒนาเว็บไซต์ด้วย PHP และ Bootstrap 5",
      "เชื่อมต่อฐานข้อมูล MySQL ผ่าน phpMyAdmin"
    ],
    demoUrl: "#contact",
    githubUrl: "#contact"
  },

  {
    id: "project-samsung-media",
    title: "สื่อประชาสัมพันธ์ Samsung Service Center",
    category: "multimedia",
    categoryName: "Multimedia & Design",
    thumbnail: "assets/images/project2.svg",
    tags: [
      "Graphic Design",
      "Multimedia",
      "Canva",
      "Social Media",
      "Samsung"
    ],
    shortDesc:
      "ผลงานออกแบบสื่อประชาสัมพันธ์สำหรับ Samsung Service Center จังหวัดนครศรีธรรมราช เพื่อใช้สื่อสารข้อมูลบริการกับลูกค้า",
    fullDesc:
      "ผลงานด้านการออกแบบสื่อประชาสัมพันธ์สำหรับ Samsung Service Center จังหวัดนครศรีธรรมราช โดยเน้นการนำเสนอข้อมูลบริการให้อ่านง่าย สวยงาม และเหมาะสำหรับการเผยแพร่ผ่านช่องทางออนไลน์และสื่อประชาสัมพันธ์ภายในศูนย์บริการ",
    features: [
      "ออกแบบสื่อประชาสัมพันธ์ศูนย์บริการ",
      "จัดวางข้อมูลบริการให้อ่านง่าย",
      "ออกแบบสื่อสำหรับ Social Media",
      "ใช้หลักการเลือกสีและองค์ประกอบให้เหมาะกับแบรนด์",
      "จัดทำภาพประชาสัมพันธ์โปรโมชั่นและบริการ",
      "เน้นรูปแบบ Modern Technology"
    ],
    demoUrl: "#contact",
    githubUrl: "#contact"
  },

  {
    id: "project-ai",
    title: "การประยุกต์ใช้ AI ในงานธุรกิจดิจิทัล",
    category: "ai",
    categoryName: "AI & Technology",
    thumbnail: "assets/images/project3.svg",
    tags: [
      "Artificial Intelligence",
      "Prompt",
      "ChatGPT",
      "Gemini",
      "Perplexity AI"
    ],
    shortDesc:
      "การศึกษาและประยุกต์ใช้เครื่องมือ AI เพื่อช่วยในการค้นหาข้อมูล สร้างเนื้อหา และสนับสนุนการทำงานด้านธุรกิจดิจิทัล",
    fullDesc:
      "ผลงานการศึกษาเกี่ยวกับการนำ Artificial Intelligence มาประยุกต์ใช้ในการเรียนและการทำงานด้านธุรกิจดิจิทัล โดยทดลองใช้เครื่องมือ AI หลายรูปแบบ รวมถึงการเขียน Prompt เพื่อให้ได้ผลลัพธ์ที่ตรงตามวัตถุประสงค์",
    features: [
      "ศึกษาแนวคิด Artificial Intelligence",
      "ทดลองใช้งาน ChatGPT และ Gemini",
      "ศึกษาและนำ Perplexity AI มาใช้ค้นหาข้อมูล",
      "ฝึกการเขียน Prompt ให้มีประสิทธิภาพ",
      "ประยุกต์ใช้ AI ในการสร้างสื่อและเนื้อหา",
      "เรียนรู้เรื่องความเป็นส่วนตัวและจริยธรรมในการใช้ AI"
    ],
    demoUrl: "#contact",
    githubUrl: "#contact"
  },

  {
    id: "project-quickfood",
    title: "QuickFood – ระบบสั่งอาหารออนไลน์",
    category: "business",
    categoryName: "Digital Business",
    thumbnail: "assets/images/project4.svg",
    tags: [
      "Digital Business",
      "E-Commerce",
      "Online Food",
      "Presentation",
      "Business Analysis"
    ],
    shortDesc:
      "โครงงานนำเสนอแนวคิดธุรกิจดิจิทัลสำหรับบริการสั่งอาหารออนไลน์ที่เน้นความรวดเร็ว สะดวก และใช้งานง่าย",
    fullDesc:
      "QuickFood เป็นแนวคิดธุรกิจดิจิทัลสำหรับการสั่งอาหารออนไลน์ โดยนำเสนอประโยชน์ของระบบ เช่น การประหยัดเวลา ความสะดวกในการสั่งอาหาร การชำระเงินออนไลน์ และการติดตามสถานะการจัดส่ง",
    features: [
      "วิเคราะห์แนวคิดธุรกิจดิจิทัล",
      "ออกแบบแนวคิดบริการสั่งอาหารออนไลน์",
      "นำเสนอระบบสั่งอาหารที่ใช้งานง่าย",
      "รองรับการชำระเงินออนไลน์",
      "ติดตามสถานะการจัดส่งอาหาร",
      "เสนอแนวทางพัฒนาธุรกิจและโปรโมชั่น"
    ],
    demoUrl: "#contact",
    githubUrl: "#contact"
  },

  {
    id: "project-storyboard",
    title: "รักไม่รีบ ชีวิตไม่พลาด",
    category: "multimedia",
    categoryName: "Multimedia & Storyboard",
    thumbnail: "assets/images/project5.svg",
    tags: [
      "Storyboard",
      "Short Film",
      "Video",
      "Campaign",
      "Creative Media"
    ],
    shortDesc:
      "ผลงานสื่อรณรงค์เรื่องการป้องกันการตั้งครรภ์ไม่พร้อม ผ่านแนวคิดหนังสั้นความยาวประมาณ 1 นาที 30 วินาที",
    fullDesc:
      "โครงการสื่อรณรงค์ภายใต้แนวคิด “รักไม่รีบ ชีวิตไม่พลาด” โดยออกแบบเนื้อหาในรูปแบบหนังสั้น พร้อมจัดทำ Storyboard จำนวน 9 ฉาก เพื่อสื่อสารให้กลุ่มเป้าหมายตระหนักถึงการวางแผนชีวิตและความรับผิดชอบ",
    features: [
      "กำหนดกลุ่มเป้าหมายเป็นนักศึกษาระดับปริญญาตรี",
      "วางโครงเรื่องสำหรับหนังสั้น",
      "จัดทำ Storyboard จำนวน 9 ฉาก",
      "เขียนบทบรรยายภาษาไทย",
      "ออกแบบสารที่ต้องการสื่อ",
      "เน้นการสื่อสารที่เข้าใจง่ายและเข้าถึงกลุ่มวัยรุ่น"
    ],
    demoUrl: "#contact",
    githubUrl: "#contact"
  },

  {
    id: "project-ecommerce",
    title: "การศึกษาพฤติกรรมผู้บริโภคบนแพลตฟอร์มออนไลน์",
    category: "business",
    categoryName: "E-Commerce & Research",
    thumbnail: "assets/images/project6.svg",
    tags: [
      "E-Commerce",
      "Consumer Behavior",
      "Lazada",
      "Online Marketing",
      "Research"
    ],
    shortDesc:
      "การศึกษาปัจจัยที่มีผลต่อการตัดสินใจซื้อสินค้าของผู้บริโภคบนแพลตฟอร์ม E-Commerce",
    fullDesc:
      "งานศึกษาพฤติกรรมผู้บริโภคบนแพลตฟอร์ม E-Commerce โดยวิเคราะห์ปัจจัยต่าง ๆ ที่มีผลต่อการตัดสินใจซื้อ เช่น ความถี่ในการซื้อ ประเภทสินค้า ราคา โปรโมชั่น รีวิวสินค้า และความน่าเชื่อถือของร้านค้า",
    features: [
      "ศึกษาพฤติกรรมผู้บริโภคออนไลน์",
      "วิเคราะห์ปัจจัยด้านราคาและโปรโมชั่น",
      "ศึกษาผลกระทบของรีวิวสินค้า",
      "วิเคราะห์ความน่าเชื่อถือของร้านค้า",
      "ศึกษาประเภทสินค้าที่ผู้บริโภคนิยมซื้อ",
      "นำข้อมูลมาประยุกต์ใช้กับการตลาดออนไลน์"
    ],
    demoUrl: "#contact",
    githubUrl: "#contact"
  }
];


// =====================================================
// Initialize and Render Projects
// =====================================================

function initProjects() {

  const container = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".projects-filter-btn");

  if (!container) return;


  // =====================================================
  // Render Projects
  // =====================================================

  function renderProjects(filter = "all") {

    container.innerHTML = "";

    const filtered =
      filter === "all"
        ? projectsData
        : projectsData.filter(
          item => item.category === filter
        );


    filtered.forEach((project, idx) => {

      const card = document.createElement("article");

      card.className = "project-card glass-card reveal";

      card.style.transitionDelay = `${idx * 0.1}s`;


      const tagsHtml = project.tags
        .map(
          tag => `<span class="tech-tag">${tag}</span>`
        )
        .join("");


      card.innerHTML = `
        <div class="project-thumbnail">

          <img
            src="${project.thumbnail}"
            alt="${project.title}"
            class="project-img"
            loading="lazy"
          >

          <div class="project-overlay">

            <button
              class="btn btn-primary btn-sm btn-quick-view"
              data-id="${project.id}"
            >
              <i class="fa-solid fa-eye"></i>
              ดูรายละเอียด
            </button>

          </div>

        </div>


        <div class="project-body">

          <span class="project-category">
            ${project.categoryName}
          </span>


          <h3 class="project-title">
            ${project.title}
          </h3>


          <p class="project-desc">
            ${project.shortDesc}
          </p>


          <div class="project-tech-tags">
            ${tagsHtml}
          </div>


          <div class="project-footer">

            <button
              class="view-details-btn"
              data-id="${project.id}"
            >
              ดูรายละเอียดผลงาน
              <i class="fa-solid fa-arrow-right"></i>
            </button>


            <div class="project-links">

              <a
                href="#contact"
                class="btn-icon"
                title="ติดต่อสอบถาม"
                aria-label="ติดต่อสอบถาม"
              >
                <i class="fa-solid fa-paper-plane"></i>
              </a>


              <button
                class="btn-icon btn-quick-view"
                data-id="${project.id}"
                title="ดูรายละเอียด"
                aria-label="ดูรายละเอียด"
              >
                <i class="fa-solid fa-circle-info"></i>
              </button>

            </div>

          </div>

        </div>
      `;


      container.appendChild(card);

    });


    // Reveal animation
    setTimeout(() => {

      container
        .querySelectorAll(".reveal")
        .forEach(el => el.classList.add("active"));

    }, 50);


    attachModalEvents();

  }


  // =====================================================
  // Filter Buttons
  // =====================================================

  filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      filterBtns.forEach(b =>
        b.classList.remove("active")
      );

      btn.classList.add("active");

      const category =
        btn.getAttribute("data-filter");

      renderProjects(category);

    });

  });


  // =====================================================
  // Modal
  // =====================================================

  const modalBackdrop =
    document.getElementById("project-modal");

  const modalCloseBtn =
    document.getElementById("modal-close");


  function openModal(projectId) {

    const project =
      projectsData.find(
        p => p.id === projectId
      );

    if (!project || !modalBackdrop) return;


    // Image
    document.getElementById("modal-img").src =
      project.thumbnail;

    document.getElementById("modal-img").alt =
      project.title;


    // Category
    document.getElementById("modal-category")
      .textContent = project.categoryName;


    // Title
    document.getElementById("modal-title")
      .textContent = project.title;


    // Description
    document.getElementById("modal-desc")
      .textContent = project.fullDesc;


    // Tags
    const tagsContainer =
      document.getElementById("modal-tags");

    if (tagsContainer) {

      tagsContainer.innerHTML =
        project.tags
          .map(
            tag => `<span class="tech-tag">${tag}</span>`
          )
          .join("");

    }


    // Features
    const featuresList =
      document.getElementById("modal-features");

    if (featuresList) {

      featuresList.innerHTML =
        project.features
          .map(
            feature => `
              <li class="modal-feature-item">
                <i class="fa-solid fa-check-circle"></i>
                <span>${feature}</span>
              </li>
            `
          )
          .join("");

    }


    // Contact button
    const demoLink =
      document.getElementById("modal-demo-link");

    if (demoLink) {

      demoLink.href = "#contact";

      demoLink.innerHTML = `
        <i class="fa-solid fa-paper-plane"></i>
        <span>ติดต่อเกี่ยวกับผลงาน</span>
      `;

      demoLink.onclick = () => {

        closeModal();

        const subjectInput =
          document.getElementById("contact-subject");

        if (subjectInput) {

          subjectInput.value =
            `สอบถามเกี่ยวกับผลงาน: ${project.title}`;

        }

      };

    }


    // Portfolio link
    const githubLink =
      document.getElementById("modal-github-link");

    if (githubLink) {

      githubLink.href = "#contact";

      githubLink.innerHTML = `
        <i class="fa-solid fa-folder-open"></i>
        <span>ดูผลงานเพิ่มเติม</span>
      `;

    }


    // Show modal
    modalBackdrop.classList.add("active");

    document.body.style.overflow = "hidden";

  }


  // =====================================================
  // Close Modal
  // =====================================================

  function closeModal() {

    if (!modalBackdrop) return;

    modalBackdrop.classList.remove("active");

    document.body.style.overflow = "";

  }


  // =====================================================
  // Attach Modal Events
  // =====================================================

  function attachModalEvents() {

    document
      .querySelectorAll(
        ".btn-quick-view, .view-details-btn"
      )
      .forEach(btn => {

        btn.addEventListener("click", e => {

          e.preventDefault();

          const id =
            btn.getAttribute("data-id");

          openModal(id);

        });

      });

  }


  // Close button
  if (modalCloseBtn) {

    modalCloseBtn.addEventListener(
      "click",
      closeModal
    );

  }


  // Click outside modal
  if (modalBackdrop) {

    modalBackdrop.addEventListener(
      "click",
      e => {

        if (e.target === modalBackdrop) {
          closeModal();
        }

      }
    );

  }


  // ESC key
  document.addEventListener(
    "keydown",
    e => {

      if (
        e.key === "Escape" &&
        modalBackdrop &&
        modalBackdrop.classList.contains("active")
      ) {

        closeModal();

      }

    }
  );


  // Initial render
  renderProjects("all");

}


// =====================================================
// Start
// =====================================================

document.addEventListener(
  "DOMContentLoaded",
  initProjects
);