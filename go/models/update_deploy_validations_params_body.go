// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// UpdateDeployValidationsParamsBody update deploy validations params body
//
// swagger:model updateDeployValidationsParamsBody
type UpdateDeployValidationsParamsBody struct {

	// secrets scan
	SecretsScan interface{} `json:"secrets_scan,omitempty"`
}

// Validate validates this update deploy validations params body
func (m *UpdateDeployValidationsParamsBody) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *UpdateDeployValidationsParamsBody) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *UpdateDeployValidationsParamsBody) UnmarshalBinary(b []byte) error {
	var res UpdateDeployValidationsParamsBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
