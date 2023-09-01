import React from "react";

import './comment.scss'

export default function AllComment({ allComment }) {
    return (
        <div>
            {allComment.length > 0
                ? allComment.map((item, idx) => {
                      return (
                          <div key={idx} className="commentWrap">
                              <div className="author">
                                  {item.author}
                                  <span className="time">{item.createdAt}</span>
                              </div>
                              <div className="comment">{item.comment}</div>
                          </div>
                      );
                  })
                : "댓글이 없습니다."}
        </div>
    );
}
