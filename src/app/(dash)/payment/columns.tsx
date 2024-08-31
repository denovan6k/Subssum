"use client"

import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  id: string;
  service: string;
  amount: number;
  totalamount: number; // Corrected key here, no space between "total" and "amount"
  status: "initiated" | "processing" | "successful" | "failed";
  paymentMethod: string; // Corrected key here, changed from "payment" to "paymentMethod"
  action: string;
  transactionNo: string; // Corrected key here, changed from "transaction no" to "transactionNo"
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "service",
    header: "Service",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "totalamount", // Corrected to match the type definition
    header: "Total Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "paymentMethod", // Corrected to match the type definition
    header: "Payment Method",
  },
  {
    accessorKey: "transactionNo", // Corrected to match the type definition
    header: "Transaction No",
  },
  {
    accessorKey: "action", // Corrected to match the type definition
    header: "Actions",
  },
];
