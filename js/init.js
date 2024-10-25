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

rightNavInit();
aniTextInit();
