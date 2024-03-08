```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: Payload: {
  "content": "ሰላም",
  "date": "2024-03-08T15:42:59.486Z"
}
    activate server
    server-->>browser: {"message":"note created"} 201 Created status code
    deactivate server


    Note right of browser: The browser executes the redrawNotes to update the notes
```
