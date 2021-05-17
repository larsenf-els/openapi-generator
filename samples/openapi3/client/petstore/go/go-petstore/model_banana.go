/*
 * OpenAPI Petstore
 *
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * API version: 1.0.0
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package petstore

import (
	"encoding/json"
)

// Banana struct for Banana
type Banana struct {
	LengthCm *float32 `json:"lengthCm,omitempty"`
	AdditionalProperties map[string]interface{}
}

type _Banana Banana

// NewBanana instantiates a new Banana object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBanana() *Banana {
	this := Banana{}
	return &this
}

// NewBananaWithDefaults instantiates a new Banana object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBananaWithDefaults() *Banana {
	this := Banana{}
	return &this
}

// GetLengthCm returns the LengthCm field value if set, zero value otherwise.
func (o *Banana) GetLengthCm() float32 {
	if o == nil || o.LengthCm == nil {
		var ret float32
		return ret
	}
	return *o.LengthCm
}

// GetLengthCmOk returns a tuple with the LengthCm field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Banana) GetLengthCmOk() (*float32, bool) {
	if o == nil || o.LengthCm == nil {
		return nil, false
	}
	return o.LengthCm, true
}

// HasLengthCm returns a boolean if a field has been set.
func (o *Banana) HasLengthCm() bool {
	if o != nil && o.LengthCm != nil {
		return true
	}

	return false
}

// SetLengthCm gets a reference to the given float32 and assigns it to the LengthCm field.
func (o *Banana) SetLengthCm(v float32) {
	o.LengthCm = &v
}

func (o Banana) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.LengthCm != nil {
		toSerialize["lengthCm"] = o.LengthCm
	}

	for key, value := range o.AdditionalProperties {
		toSerialize[key] = value
	}

	return json.Marshal(toSerialize)
}

func (o *Banana) UnmarshalJSON(bytes []byte) (err error) {
	varBanana := _Banana{}

	if err = json.Unmarshal(bytes, &varBanana); err == nil {
		*o = Banana(varBanana)
	}

	additionalProperties := make(map[string]interface{})

	if err = json.Unmarshal(bytes, &additionalProperties); err == nil {
		delete(additionalProperties, "lengthCm")
		o.AdditionalProperties = additionalProperties
	}

	return err
}

type NullableBanana struct {
	value *Banana
	isSet bool
}

func (v NullableBanana) Get() *Banana {
	return v.value
}

func (v *NullableBanana) Set(val *Banana) {
	v.value = val
	v.isSet = true
}

func (v NullableBanana) IsSet() bool {
	return v.isSet
}

func (v *NullableBanana) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBanana(val *Banana) *NullableBanana {
	return &NullableBanana{value: val, isSet: true}
}

func (v NullableBanana) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBanana) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

