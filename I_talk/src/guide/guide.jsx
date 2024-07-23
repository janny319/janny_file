import { Link } from "react-router-dom";
import "@/style/guide.scss"
import pageList from "@/guide/pageList.json"

function GuidePUB() {

  return(
    <div className="guide-wrap">
      <div className="tit-box">
        <h2>채팅상담솔루션 시스템 퍼블리싱 가이드</h2>
        <p>작업자 : 이은재/이희원</p>
      </div>
      <table>
      <colgroup>
          <col width="200px" />
          <col width="200px" />
          <col width="200px" />
          <col width="200px" />
          <col width="200px" />
          <col width="200px" />
          <col width="200px" />
        </colgroup>
        <thead>
          <tr>
            <th>1Depth</th>
            <th>2Depth</th>
            <th>3Depth</th>
            <th>화면 ID</th>
            <th>작업자</th>
            <th>작업여부</th>
            <th>작업완료일</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
        {pageList.map((row, index) => (
          <tr key={index}>
            <td>{row.Title}</td>
            <td>{row.subTitle}</td>
            <td>{row.thirdTitle}</td>
            <td>{row.id}</td>
            <td>{row.worker}</td>
            <td>{row.status}</td>
            <td>{row.dueDate}</td>
            <td><Link to={row.link} target="_blank">{row.linkName}</Link></td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GuidePUB;