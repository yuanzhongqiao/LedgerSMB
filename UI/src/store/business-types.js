/** @format */

import { defineStore } from "pinia";
import { configStoreTemplate } from "@/store/configTemplate";

export const useBusinessTypesStore = defineStore("business-types", {
    ...configStoreTemplate,
    state: () => {
        return {
            fields: ["id", "description", "discount"],
            id: "id",
            items: [],
            _links: [],
            url: "contacts/business-types"
        };
    }
});
