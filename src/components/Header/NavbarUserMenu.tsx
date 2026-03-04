"use client";

import { useQueryClient } from "@tanstack/react-query";
import { LogOut, Settings, Trash2, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useAccount, useUser } from "@/hooks/useUser";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import LogoutButton from "@/components/Auth/LogoutButton";

const NavbarUserMenu = () => {
  const { data } = useUser();
  const { deleteUserAccount, isDeleting } = useAccount();
  const user = data?.data;

  const [openDelete, setOpenDelete] = useState(false);

  const handleDelete = () => {
    deleteUserAccount();
  };

  if (!user) return null;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="font-semibold capitalize transition hover:underline">
            {user.name}
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-52">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {/* PROFILE */}
          <DropdownMenuItem asChild>
            <Link href="/profile" className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Link>
          </DropdownMenuItem>

          {/* MANAGE ACCOUNT */}
          <DropdownMenuItem asChild>
            <Link href="/profile" className="flex items-center">
              <Settings className="mr-2 h-4 w-4" />
              Manage Account
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* LOGOUT */}
          <DropdownMenuItem asChild>
            <div className="flex w-full items-center">
              <LogoutButton />
            </div>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* DELETE ACCOUNT */}
          <DropdownMenuItem
            onClick={() => setOpenDelete(true)}
            className="text-red-600 focus:text-red-600"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Account
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* DELETE CONFIRMATION */}
      <AlertDialog open={openDelete} onOpenChange={setOpenDelete}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete your account?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. All your data will be permanently deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
              Yes, Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default NavbarUserMenu;
