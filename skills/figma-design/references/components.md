# Komponen

Tool: `figma_create_component_set` (variant dari matriks axis, misalnya `variant=primary|secondary|ghost` x `size=sm|md|lg` x `state=default|hover|disabled`), `figma_instantiate_component`, `figma_set_instance_properties`, `figma_add_component_property`, `figma_set_description`, `figma_execute` (Plugin API bebas untuk kasus yang tidak tercakup tool deklaratif).

Set minimum (sesuaikan dengan kebutuhan layar):
- Button, IconButton
- TextField (label, helper, error), Select, Checkbox, Radio, Switch
- Card, ListItem, Table row
- Navbar/TopBar, Sidebar atau BottomNav, Tabs
- Dialog/Modal, Toast/Alert, EmptyState, Skeleton/Loading

Aturan:
- Auto layout di semua komponen, tanpa posisi absolut kecuali memang perlu.
- Fill, stroke, radius, dan spacing terikat ke variable semantic.
- Setiap komponen diberi deskripsi: kegunaan, kapan dipakai, dan state yang tersedia.
- Setelah membuat, jalankan `figma_lint_design` atau `figma_audit_design_system` jika tersedia untuk menemukan nilai hardcoded.
