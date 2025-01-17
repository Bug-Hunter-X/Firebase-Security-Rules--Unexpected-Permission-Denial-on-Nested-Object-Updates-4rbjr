The solution requires more explicit rules to handle the nested structure.  Instead of only specifying rules for the `profile` level, we need to explicitly allow access to the nested `address` object. We can achieve this by using wildcard characters or revising the rule structure:

```
  rules_version = '2';
  service cloud.firestore {
    match /databases/{database}/documents { 
      match /users/{userId}/profile/{profileField} { 
          allow read, write: if request.auth.uid == userId; 
      }
    }
  }
}
```

This revised rule will allow read and write access to all fields under the `profile` object, effectively solving the permission denial issue for nested fields.  Another approach is to restructure the data to a flatter format to simplify rule management, though this might not always be feasible depending on your data model.