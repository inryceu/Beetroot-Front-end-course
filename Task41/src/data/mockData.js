export const metrics = [
  {
    id: 1,
    title: "Monthly Revenue",
    value: "1 385 $US",
    color: "#31708f",
    icon: "DollarSign",
  },
  {
    id: 2,
    title: "New Orders",
    value: "12",
    color: "#f0ad4e",
    icon: "ShoppingCart",
  },
  {
    id: 3,
    title: "Pending Reviews",
    value: "3",
    color: "#d9534f",
    icon: "MessageSquare",
  },
  {
    id: 4,
    title: "New Customers",
    value: "9",
    color: "#5cb85c",
    icon: "UserPlus",
  },
];

export const reviews = [
  {
    id: 1,
    user: "John Doe",
    text: "At eaque omnis. Dolores laborum nihil occaecati...",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    user: "Jane Smith",
    text: "Autem consequuntur dolores. Ut sit aut eum...",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    user: "Bob Johnson",
    text: "Harum quos exercitationem inventor...",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
];

export const customers = [
  { id: 1, name: "Cedrick Kirlin", avatar: "https://i.pravatar.cc/150?img=14" },
  {
    id: 2,
    name: "Alessandra Simonis",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  { id: 3, name: "Lempi Gorczany", avatar: "https://i.pravatar.cc/150?img=16" },
  { id: 4, name: "Loma Quigley", avatar: "https://i.pravatar.cc/150?img=17" },
  { id: 5, name: "Donnell Nienow", avatar: "https://i.pravatar.cc/150?img=18" },
];

export const orders = [
  {
    id: 1,
    orderDate: "2026-05-30T14:30:00Z",
    status: "Pending Payment",
    items: [
      { name: "Premium Subscription", quantity: 1, price: 29.99 },
      { name: "Extended Support", quantity: 2, price: 15.00 },
    ],
    totalAmount: 64.98,
  },
  {
    id: 2,
    orderDate: "2026-05-30T10:15:00Z",
    status: "Pending Payment",
    items: [
      { name: "Basic Plan", quantity: 1, price: 9.99 },
      { name: "Monthly Add-on", quantity: 1, price: 4.99 },
      { name: "Premium Subscription", quantity: 3, price: 29.99 },
    ],
    totalAmount: 59.96,
  },
  {
    id: 3,
    orderDate: "2026-05-29T18:45:00Z",
    status: "Pending Payment",
    items: [
      { name: "Enterprise License", quantity: 5, price: 199.99 },
      { name: "API Access", quantity: 1, price: 49.99 },
    ],
    totalAmount: 1049.84,
  },
  {
    id: 4,
    orderDate: "2026-05-30T09:00:00Z",
    status: "Pending Payment",
    items: [
      { name: "Starter Package", quantity: 1, price: 19.99 },
      { name: "Consultation Hour", quantity: 2, price: 75.00 },
    ],
    totalAmount: 139.98,
  },
];
