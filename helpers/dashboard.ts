import { Page } from "@playwright/test";
import { LOGIN, PASS } from "../login.config";

export class Dashboard {

constructor(readonly page: Page) {}

  async openWorkspaceSwitcher() {            
    await this.page.click('[data-testid="workspace-switcher"]');
}
 
async openRecentlyViewedBoardsMenu() {            
    await this.page.click('[data-testid="recently-viewed-boards-menu"]');

}
async openStarredBoardsMenu() {            
    await this.page.click('[data-testid="starred-boards-menu"]');
}

async createNewWorkspace(wsName) {            
    await this.page.click('[data-testid="header-create-menu-button"]');
    await this.page.click('[data-testid="header-create-team-button"]');
    await this.page.click('[data-testid="header-create-team-name-input"]');
    await this.page.fill('[data-testid="header-create-team-name-input"]', wsName);
    await this.page.click('[data-testid="header-create-team-type-input"]');
    await this.page.click("//*[contains(text(), 'Marketing')][1]");
    await this.page.click('[data-testid="header-create-team-submit-button"]');
    await this.page.click('[data-testid="show-later-button"]');
}

}
