from rest_framework.views import APIView
from src.Recommend import Recommend
from django.http import JsonResponse
import pandas as pd
from .views import quantify_age, get_similarity_data
import json
import ipdb


class RecommendDataAPIView(APIView):
    def get(self, request, format=None):
        user_data_order_dict = dict(request.GET)
        ipdb.set_trace()
        category = user_data_order_dict.pop('category')[0]

        user_dict = {
            k: 0 if not v[0] else quantify_age(int(v[0])) if k == 'age' else int(v[0]) for k, v in
        dict(user_data_order_dict).items() if v[0]
        }

        # change user dictionay to pandas dataframe
        pd_dataframe = pd.DataFrame.from_dict([user_dict])
        print(pd_dataframe)
        # get job from Recommend
        similar = Recommend(pd_dataframe, category)
        data = similar.getData()
        print(similar)
        new_data = json.dumps(data, default=str)
        # new_data- unquantify
        # retrive all data context data

        # return JsonResponse(json.dumps('heheh'), safe=False)
        return JsonResponse(new_data, safe=False)
