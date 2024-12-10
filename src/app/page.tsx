import { ManagementTab } from "@/app/dashboard/_components/management/management-tab";
import { Modal } from "@/components/Modal";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen ">
      <Modal title="Update Meal And Market" triggerText="Update">
        <ManagementTab />
      </Modal>
    </div>
  );
}
