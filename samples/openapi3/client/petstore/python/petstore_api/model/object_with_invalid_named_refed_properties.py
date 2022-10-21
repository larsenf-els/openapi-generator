# coding: utf-8

"""
    OpenAPI Petstore

    This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by: https://openapi-generator.tech
"""

from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from petstore_api import schemas  # noqa: F401


class ObjectWithInvalidNamedRefedProperties(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        required = {
            "!reference",
            "from",
        }
        
        class properties:
        
            @staticmethod
            def _from() -> typing.Type['FromSchema']:
                return FromSchema
        
            @staticmethod
            def reference() -> typing.Type['ArrayWithValidationsInItems']:
                return ArrayWithValidationsInItems
            __annotations__ = {
                "from": _from,
                "!reference": reference,
            }
    
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["from"]) -> 'FromSchema': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["!reference"]) -> 'ArrayWithValidationsInItems': ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["from", "!reference", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["from"]) -> 'FromSchema': ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["!reference"]) -> 'ArrayWithValidationsInItems': ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["from", "!reference", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'ObjectWithInvalidNamedRefedProperties':
        return super().__new__(
            cls,
            *args,
            _configuration=_configuration,
            **kwargs,
        )

from petstore_api.model.array_with_validations_in_items import ArrayWithValidationsInItems
from petstore_api.model.from_schema import FromSchema