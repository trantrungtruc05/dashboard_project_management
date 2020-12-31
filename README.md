# List Of API


## News

- Get all News
```sh
GET :  /news/getAll
```

- Get News by projectId
```sh
GET :  /news/getNewsByProjectId/:projectId
```

- Send mail by News and UserId
```sh
GET :  /news/sendMail/:newsId/:userId
```

- Check mail log by news Id
```sh
GET :  /news/checkLogMail/:newsId
```

# How to deploy


## Step 1

Mở file env.ts trong folder src/config thay đổi tên ứng với môi trường đang deploy
- Ví dụ deploy trên môi trường prod thì để 
```js
import { resolve } from "path"
import { config } from "dotenv"

config({ path: resolve(__dirname, "../.env.prod") })
```

- Tương tự với môi trường dev thì để
```js
import { resolve } from "path"
import { config } from "dotenv"

config({ path: resolve(__dirname, "../.env.prod") })
```

## Step 2

- Tạo 2 file config env ứng với từng môi trường. Trong Step 1 2 file tương ứng được đặt trong folder src (.env.dev và .env.prod).
2 file này sẽ có dạng key-value. Config này sẽ ứng với từng môi trường khác nhau. 

Ví dụ :

```bash
HOST_NAME_DB=172.31.24.0
DATABASE_NAME=excel_data
USER_NAME=excel_data_user
PASSWORD=&(gGre=y:ogn|lkOsPOv9}SyF(L]Bk

KEY_DECRYPT_TOKEN=ZETYY5JGK5NTYOVE
PORT=3003
```


* Lưu ý : khi push code lên repo file .env.prod sẽ không được up lên mà sẽ phải thay đổi trực tiếp trên repo để đảm bảo sự an toàn cấu hình trên môi trường prod 









/team/getAll
/team/getById/?TeamId
/team/getByUser/?UserId
/team/edit/?TeamId
/team/delete/?TeamId

/user/getAll
/user/getById/?UserId

- return user dashboard
/user/edit/?UserId
/user/delete/?UserId

/member/getAll/?TeamId
/member/edit/?TeamId/?UserId
/member/delete/?TeamId/?UserId

/project/getAll
/project/getByTeam/?TeamId
/project/getByUser/?UserId
/project/getById/?ProjectId
/project/edit/?ProjectId
/project/delete/?ProjectId

/repo/getAll
/repo/getById/?RepoId
/repo/edit/?RepoId
/repo/delete/?RepoId

/progress/getAll
/progress/getByTeam/?TeamId
/progress/getByProject/?ProjectId
/progress/edit/?ProgressId
/progress/delete/?ProgressId

/progressc/getByProgress/?ProgressId
/progressc/edit/?ProgressCId
/progressc/delete/?ProgressCId

/section/getByProject/?ProjectId
/section/edit/?SectionId
/section/delete/?SectionId

/task/getByTeam/?TeamId
/task/getByProject/?ProjectId
/task/getByUser/?UserId
/task/edit/?TaskId
/task/delete/?TaskId

/taskc/getByTask/?TaskId
/taskc/edit/?TaskCId
/taskc/delete/?TaskCId

/taska/getByTask/?TaskId
/taska/edit/?TaskAId
/taska/delete/?TaskAId

/status/getAll
/status/edit/?StatusId
/staus/delete/?StatusId

/log/getAll
/log/getByUser/?UserId
/log/getByObjest/?objectType/?objectId
/log/add