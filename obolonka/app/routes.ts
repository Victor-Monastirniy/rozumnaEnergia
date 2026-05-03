import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/kotiSivu.tsx"),
    route("sivuKaksi", "routes/sivuKaksi/index.tsx"),
    route("func_stab_Troian", "routes/functional_stability_Troian/index.tsx"),
] satisfies RouteConfig;
