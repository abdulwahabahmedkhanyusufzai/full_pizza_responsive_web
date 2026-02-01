from pydantic import BaseModel
from typing import Optional

class UserCreate(BaseModel):
    full_name: str
    phone_number: str
    email: str
    password: str

class UserResponse(BaseModel):
    id: int
    full_name: str
    phone_number: str
    email: str

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None
