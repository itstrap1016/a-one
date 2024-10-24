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

    beforeNavList.classList.remove("active_now");
    activeNavList.classList.add("active_now");
  },
});

const rightNavInit = () => {
  const activeSection = myFullpage.getActiveSection();
  const anchor = activeSection.anchor;
  const activeNavList = document.querySelector(`#right_nav .${anchor}_list`);
  activeNavList.classList.add("active_now");
};

rightNavInit();
