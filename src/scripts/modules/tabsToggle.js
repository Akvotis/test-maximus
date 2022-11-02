export const tabsToggle = (tabsSelector, tabsHeadSelector, tabsBodySelector, tabsCaptionSelector, tabsCaptionActiveClass, tabsContentActiveClass) => {

    const tabs = document.querySelector(tabsSelector);
    const head = tabs.querySelector(tabsHeadSelector);
    const body = tabs.querySelector(tabsBodySelector);

    const getActiveTabName = () => {
        return head.querySelector(`.${tabsCaptionActiveClass}`).dataset.tab;
    }

    const setActiveContent = () => {
        if (body.querySelector(`.${tabsContentActiveClass}`)) {
            body.querySelector(`.${tabsContentActiveClass}`).classList.remove(tabsContentActiveClass);
        }
        body.querySelector(`[data-tab=${getActiveTabName()}]`).classList.add(tabsContentActiveClass);
    }

    // проверяем при загрузке страницы, есть ли активная вкладка
    if (!head.querySelector(`.${tabsCaptionActiveClass}`)) {
        head.querySelector(tabsCaptionSelector).classList.add(tabsCaptionActiveClass);
    }

    setActiveContent(getActiveTabName());

    head.addEventListener('click', e => {
        const caption = e.target.closest(tabsCaptionSelector);
        if (!caption) return;
        if (caption.classList.contains(tabsCaptionActiveClass)) return;
        if (head.querySelector(`.${tabsCaptionActiveClass}`)) {
            head.querySelector(`.${tabsCaptionActiveClass}`).classList.remove(tabsCaptionActiveClass);
        }

        caption.classList.add(tabsCaptionActiveClass);

        setActiveContent(getActiveTabName());
    })
}