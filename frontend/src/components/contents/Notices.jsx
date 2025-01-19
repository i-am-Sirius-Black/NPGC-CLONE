import { data } from '../../data';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const Notices = ({notices}) => {
  const noticesToDisplay = notices.length > 0 ? notices : data.notices;

  return (
    <div className="bg-gray-50 mb-8">
      <h1 className="text-2xl font-light leading-11 mt-0 text-blue-900 mb-2">
        <span className="border-t-2 border-blue-400 py-1 px-3 inline-block">
          Important Notices
        </span>
      </h1>
      <div className="px-4 pb-4">
        {noticesToDisplay.map((notice) => (
          <p className="text-gray-700 text-sm mb-2" key={notice._id}>
            <a
              href={notice.url}
              className="text-blue-400 transition duration-400 ease-in-out hover:underline"
            >
            <ArrowRightIcon className="mr-2" />
              {notice.title}
            </a>
            {/* <img
              src="assets/images/misc/new_red.gif"
              alt="new"
              className="align-middle ml-1"
            /> */}
          </p>
        ))}
      </div>
      <a
        href="Announcement.aspx"
        className="text-sm text-blue-400 transition duration-400 ease-in-out hover:underline block mt-4 p-2"
      >
        All Important Notices
        <i className="fas fa-arrow-right ml-2"></i>
      </a>
    </div>
  );
};

export default Notices;
