import React from "react";
import { memberType } from "../../types/types";

type memberInformationModalProps = {
  member: memberType;
  setModalOpen: (state: boolean) => void;
  setIsUpdatingMember: (state: boolean) => void;
};

export const MemberInformationModal = ({
  setIsUpdatingMember,
  setModalOpen,
  member,
}: memberInformationModalProps) => {
  const timestamp = member.timestamp.slice(0, member.timestamp.search("T"));

  const buttonCSS =
    "w-20 rounded-lg px-4 py-[3px] text-xl font-medium transition-colors";

  return (
    <>
      <div className="mb-14 flex flex-col gap-2 text-xl">
        <p>Phone #: {member.phone_number}</p>
        <p>Email: {member.email}</p>
        <p>Shirt Size: {member.shirt_size_id}</p>
        <p>Timestamp: {timestamp}</p>
        <p>Member since: {timestamp}</p>
        <p>Cougar Coins: 0</p>
      </div>
      <div className="flex items-center justify-end gap-6">
        <button
          onClick={() => {
            setIsUpdatingMember(true);
          }}
          className={`${buttonCSS} bg-gray-200 text-gray-800 hover:bg-gray-300`}
          aria-label="Edit member"
        >
          Edit
        </button>
        <button
          onClick={() => {
            setModalOpen(false);
          }}
          className={`${buttonCSS} bg-red-600 text-gray-100 hover:bg-red-700`}
          aria-label="Close modal"
        >
          Done
        </button>
      </div>
    </>
  );
};