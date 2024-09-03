# INDEX

- [INDEX](#index)
  - [APIs](#apis)

---

## APIs

In python, we can communicate with APIs using the `requests` library.

```python
import requests

response = requests.get("http://api.open-notify.org/iss-now.json")
print(response.status_code) # 200
print(response.json()) # {'message': 'success', 'iss_position': {'longitude': '-175.8489', 'latitude': '-51.4731'}, 'timestamp': 1627779856}
```

- To print the response in a more readable format, we can use the `json.dumps()` function. from the `json` library.

  ```python
  import requests
  import json

  response = requests.get("http://api.open-notify.org/iss-now.json")
  print(response.status_code) # 200
  print(json.dumps(response.json(), indent=4))
  # {
  #     "message": "success",
  #     "iss_position": {
  #         "longitude": "-175.8489",
  #         "latitude": "-51.4731"
  #     },
  #     "timestamp": 1627779856
  # }
  ```
