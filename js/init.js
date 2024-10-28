const myFullpage = new fullpage("#fullpage", {
  //options here
  licenseKey: "A_ONE",
  autoScrolling: true,
  scrollHorizontally: true,
  anchors: [
    "intro",
    "east_course",
    "south_course",
    "west_course",
    "family_site",
  ],
  onLeave: function (origin, destination, direction) {
    const beforeAnchor = origin.anchor;
    const nowAnchor = destination.anchor;
    const beforeNavList = document.querySelector(
      `#right_nav .${beforeAnchor}_list`
    );
    const activeNavList = document.querySelector(
      `#right_nav .${nowAnchor}_list`
    );
    const header = document.querySelector("#header");
    const rightNav = document.querySelector("#right_nav");
    beforeNavList.classList.remove("active_now");
    activeNavList.classList.add("active_now");
    if (beforeAnchor !== "family_site") {
      const beforeText = document.querySelector(
        `#fullpage .section.${beforeAnchor} .animation_text`
      );
      beforeText.classList.remove("active_now");
    }
    if (nowAnchor !== "family_site") {
      const activeText = document.querySelector(
        `#fullpage .section.${nowAnchor} .animation_text`
      );
      activeText.classList.add("active_now");
    }

    if (beforeAnchor === "family_site") {
      header.classList.remove("white_bg");
      rightNav.classList.remove("white_bg");
    }
    if (nowAnchor === "family_site") {
      header.classList.add("white_bg");
      rightNav.classList.add("white_bg");
    }
  },
});

const rightNavInit = () => {
  const activeSection = myFullpage.getActiveSection();
  const anchor = activeSection.anchor;
  const activeNavList = document.querySelector(`#right_nav .${anchor}_list`);
  activeNavList.classList.add("active_now");
};
const aniTextInit = () => {
  const activeSection = myFullpage.getActiveSection();
  const anchor = activeSection.anchor;
  if (anchor === "family_site") return;
  const activeText = document.querySelector(
    `#fullpage .section.${anchor} .animation_text`
  );
  activeText.classList.add("active_now");
};
const familySiteInit = () => {
  const header = document.querySelector("#header");
  const rightNav = document.querySelector("#right_nav");
  header.classList.add("white_bg");
  rightNav.classList.add("white_bg");
};
const leftNavInit = () => {
  const btn = document.querySelector("#left_nav .arrow_button");
  const leftNav = document.querySelector("#left_nav");

  btn.addEventListener("click", () => {
    btn.classList.toggle("clicked");
    leftNav.classList.toggle("clicked");
  });
};
const calendarInit = () => {
  flatpickr("#datepicker", {
    inline: true,
    locale: "ko",
  });
};
const popupInit = () => {
  const reservBtn = document.querySelector("#left_nav .menu .reserv button");
  const popupBg = document.querySelector("#pc_pop_up .bg");
  const closeBtn = document.querySelector(
    "#pc_pop_up .window > .header > button"
  );
  const popup = document.querySelector("#pc_pop_up");

  reservBtn.addEventListener("click", () => {
    popup.classList.add("active_now");
    myFullpage.setAllowScrolling(false);
  });
  popupBg.addEventListener("click", () => {
    popup.classList.remove("active_now");
    myFullpage.setAllowScrolling(true);
  });
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("active_now");
    myFullpage.setAllowScrolling(true);
  });
};
const popupTabInit = () => {
  const btns = document.querySelectorAll(
    "#pc_pop_up .window .content .tab_time_table .tab li button"
  );

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!btn.classList.contains("active_now")) {
        const activeBtn = document.querySelector(
          "#pc_pop_up .window .content .tab_time_table .tab li button.active_now"
        );
        activeBtn.classList.remove("active_now");
        btn.classList.add("active_now");
      }
    });
  });
};
const initialInit = () => {
  rightNavInit();
  aniTextInit();
  leftNavInit();
  calendarInit();
  popupInit();
  popupTabInit();
};

initialInit();
