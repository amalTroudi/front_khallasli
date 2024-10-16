import { ContactsMockApi } from 'app/mock-api/apps/contacts/api';
import { ECommerceInventoryMockApi } from 'app/mock-api/apps/ecommerce/inventory/api';
import { HelpCenterMockApi } from 'app/mock-api/apps/help-center/api';
import { AuthMockApi } from 'app/mock-api/common/auth/api';
import { NavigationMockApi } from 'app/mock-api/common/navigation/api';
import { SearchMockApi } from 'app/mock-api/common/search/api';
import { ShortcutsMockApi } from 'app/mock-api/common/shortcuts/api';
import { UserMockApi } from 'app/mock-api/common/user/api';
import { PdvMockApi } from 'app/mock-api/dashboards/pdv/api';
import { CryptoMockApi } from 'app/mock-api/dashboards/crypto/api';
import { FinanceMockApi } from 'app/mock-api/dashboards/finance/api';
import { ProjectMockApi } from 'app/mock-api/dashboards/project/api';
import { ActivitiesMockApi } from 'app/mock-api/pages/activities/api';
import { IconsMockApi } from 'app/mock-api/ui/icons/api';

export const mockApiServices = [
    ActivitiesMockApi,
    PdvMockApi,
    AuthMockApi,
    ContactsMockApi,
    CryptoMockApi,
    ECommerceInventoryMockApi,
    FinanceMockApi,
    HelpCenterMockApi,
    IconsMockApi,
    NavigationMockApi,
    ProjectMockApi,
    SearchMockApi,
    ShortcutsMockApi,
    UserMockApi,
];
