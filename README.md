### App Notes

**Create data model:**

```
{
  task: string,
  isComplete: boolean
}
```

**Create firebase file: ./src/firebase/index.js**  
Get the values below from the Firebase dashboard

```
import firebase from 'firebase';

const config = {
  apiKey: *************
  authDomain: *************,
  databaseURL: *************,
  projectId: *************',
  storageBucket: *************,
  messagingSenderId: *************,
  appId: *************
};
export default firebase.initializeApp(config);
```

**Import Links:**  
[Querying Examples](https://github.com/firebase/snippets-node/blob/750ec38af43b8f35d3dea39ab38fc839d06d40d5/firestore/main/index.js#L583-L597)  
[Firebase Fetch Hook](https://github.com/satansdeer/react-firebase/blob/master/src/App.js)  
[Get vs Snapshot](https://stackoverflow.com/questions/54479892/difference-between-get-and-snapshot-in-cloud-firestore)

If you look in the hooks folder, you will find 2 custom hooks : useFsQuery, useFsMethods. useFsQuery both fetches all docs as a snapshot and exposes some querying methods that allow the user to manually trigger certain queries to update the snapshot reads. useFsMethods exposes both the CRUD operations for the DB as well as some auth methods.
