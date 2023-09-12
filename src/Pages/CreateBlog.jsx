import plus from "../assets/CMS/plus.svg";
import docs from "../assets/CMS/docs.png";
import TinyEditor from "../components/Editor";

const CreateBlog = () => {
  return (
    <section className="flex flex-col section font-Poppins">
      <div className="flex justify-between items-center mt-6 mx-3">
        <button className="flex items-center gap-3 py-2 px-8 border border-[#008BD9] text-[#008BD9] text-sm font-medium">
          <img src={plus} alt="" /> Add New Post
        </button>
        <button className="flex items-center gap-3 py-2.5 px-8 border bg-white rounded-md text-sm font-medium shadow-[0_0_5px_0_#00000040] text-[#008BD9]">
          <img src={docs} alt="" /> Publish
        </button>
      </div>
      <div className="flex justify-between items-center mt-6">
        <TinyEditor />
        <div></div>
      </div>
    </section>
  );
};

export default CreateBlog;
