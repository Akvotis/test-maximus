"use strict"

import { popup } from './modules/popup.js';
import { radio } from './modules/radio.js';
import { tabsToggle } from './modules/tabsToggle.js';

document.addEventListener("DOMContentLoaded", () => {
    popup();
    radio();
    tabsToggle('.js-section__tabs', '.js-tabs__head', '.js-tabs__body', '.js-tab', 'list__tab-active', 'list__cards-active');
});