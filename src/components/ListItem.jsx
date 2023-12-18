import Link from "next/link";

export default function ListItem(props) {
  const date = new Date(props.newsItem.time * 1000);

  const sendReadItem = async (item) => {
    fetch(`http://localhost:3000/itemStatuses/${item.id}`, {
      method: "PUT",
      body: "read",
    });
  };

  const selectNewsItem = async () => {
    props.selectNewsItem(props.newsItem.id);
    const response = await sendReadItem(props.newsItem);
    props.changeStatus(props.newsItem.id, "read");
  };

  return (
    <div className={`Item ${props.status ? props.status : "new"}`}>
      <div className="mainInfo ">
        <div>
          <Link className="itemTitle" href={`/item/${props.newsItem.id}`}>
            {props.newsItem.title}
          </Link>
          <span className="domain">
            {props.newsItem.url
              ? " " + new URL(props.newsItem.url).hostname
              : " "}
          </span>
        </div>
        <div className="info">
          {props.newsItem.score} points
          <span className="divider">|</span>
          by {props.newsItem.by}
          <span className="divider">|</span>
          {date.toLocaleDateString() || ""}
          <span className="divider">|</span>
          <a
            className="comments"
            href="https://news.ycombinator.com/item?id=12115187"
          >
            <strong>{props.newsItem.descendants || 0}</strong> comments
          </a>
        </div>
      </div>
    </div>
  );
}
