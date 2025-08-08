from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(["POST"])
def analyze_inflation(request):
    spending = request.data  # e.g., {"Food":"300","Housing":"900","Transportation":"120"}
    rate = 0.08
    impacted = {k: float(v or 0) * (1 + rate) for k, v in spending.items()}
    return Response({"inflation_rate": rate, "impacted_spending": impacted})
